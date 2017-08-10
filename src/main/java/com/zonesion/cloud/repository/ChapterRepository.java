package com.zonesion.cloud.repository;

import com.zonesion.cloud.domain.Chapter;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Chapter entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChapterRepository extends JpaRepository<Chapter,Long> {
    
}
